<?php

namespace PetAdoptionPlugin;

class GetPets
{
	/** @var Pet[] */
	private readonly array $pets;

	private readonly int $totalCount;

	private readonly int $count;

	public $searchParams = [
		'pet_name' => 'pet_name LIKE %s',
		'species' => 'species LIKE %s',
		'fav_food' => 'fav_food LIKE %s',
		'fav_color' => 'fav_color LIKE %s',
		'fav_hobby' => 'fav_hobby LIKE %s',
		'min_year' => 'birth_year >= %d',
		'max_year' => 'birth_year <= %d',
		'min_weight' => 'pet_weight >= %d',
		'max_weight' => 'pet_weight <= %d',
	];

	public function __construct()
	{
		global $wpdb;

		$tablename = $wpdb->prefix . 'pets';

		$baseSelectQuery = "SELECT * FROM $tablename";
		$selectQueryWhere = $this->getSelectWhere();

		$preparedQuery = $this->getPreparedQuery($baseSelectQuery, $selectQueryWhere, "LIMIT 100");
		$resultPets = $wpdb->get_results($preparedQuery);
	
		$baseSelectCountQuery = "SELECT COUNT(*) FROM $tablename";
		$countQuery = $this->getPreparedQuery($baseSelectCountQuery, $selectQueryWhere);
		$resultCount = $wpdb->get_var($countQuery);

		$pets = !empty($resultPets) ? array_map(fn($pet) => new Pet($pet), $resultPets) : [];
		$totalCount = !empty($resultCount) ? (int) $resultCount : 0;

		$this->pets = $pets;
		$this->totalCount = $totalCount;
	}

	public function getSelectWhere(){
		$searchParamsFiltered = array_filter(
			$this->searchParams, 
			fn($searchParam) => isset($_GET[$searchParam]),
			ARRAY_FILTER_USE_KEY
		);
		$whereFieldsString = implode(" AND ", $searchParamsFiltered);

		return !empty($whereFieldsString) ? "WHERE $whereFieldsString" : "";
	}

	public function getSearchParamsValues(){
		/** @var string[] */
		$searchParamsFiltered = array_filter(
			array_keys($this->searchParams), 
			fn($searchParam) => isset($_GET[$searchParam])
		);
		$searchParamsValues = array_map(
			fn($searchParam) => $_GET[$searchParam],
            $searchParamsFiltered
		);

        return $searchParamsValues;
	}

	public function getPreparedQuery(
		string $baseSelectQuery,
		string $selectQueryWhere,
		string $selectQueryLimit = ""
	){
		global $wpdb;

		if(empty($selectQueryWhere)) return "$baseSelectQuery $selectQueryLimit";

		return $wpdb->prepare(
			"$baseSelectQuery $selectQueryWhere $selectQueryLimit", 
			$this->getSearchParamsValues()
		);
	}

	public function getAll(){
		return $this->pets;
	}

	public function getTotalCount(){
        return $this->totalCount;
    }

	public function getCount(){
		return count($this->pets);
	}
}