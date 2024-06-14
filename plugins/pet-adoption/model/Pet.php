<?php

namespace PetAdoptionPlugin;

class Pet {
    public int $id;
    public string $pet_name;
    public int $pet_weight;
    public int $birth_year;
    public string $species;
    public string $fav_food;
    public string $fav_hobby;
    public string $fav_color;

    /** @param array|object $data */
    public function __construct($data = []) {
        if(is_array($data)) {
            if(isset($data['id'])) $this->id = (int) $data['id'];
            if(isset($data['pet_name'])) $this->pet_name = (string) $data['pet_name'];
            if(isset($data['pet_weight'])) $this->pet_weight = (int) $data['pet_weight'];
            if(isset($data['birth_year'])) $this->birth_year = (int) $data['birth_year'];
            if(isset($data['species'])) $this->species = (string) $data['species'];
            if(isset($data['fav_food'])) $this->fav_food = (string) $data['fav_food'];
            if(isset($data['fav_hobby'])) $this->fav_hobby = (string) $data['fav_hobby'];
            if(isset($data['fav_color'])) $this->fav_color = (string) $data['fav_color'];
        }

        if(is_object($data)){
            if(isset($data->id)) $this->id = (int) $data->id;
            if(isset($data->pet_name)) $this->pet_name = (string) $data->pet_name;
            if(isset($data->pet_weight)) $this->pet_weight = (int) $data->pet_weight;
            if(isset($data->birth_year)) $this->birth_year = (int) $data->birth_year;
            if(isset($data->species)) $this->species = (string) $data->species;
            if(isset($data->fav_food)) $this->fav_food = (string) $data->fav_food;
            if(isset($data->fav_hobby)) $this->fav_hobby = (string) $data->fav_hobby;
            if(isset($data->fav_color)) $this->fav_color = (string) $data->fav_color;
        }
    }

    /**
     * @return array<string, mixed>
     */
    public function toArray(){
        $petArray = [];

        if(isset($this->id)) $petArray['id'] = $this->id;
        if(isset($this->pet_name)) $petArray['pet_name'] = $this->pet_name;
        if(isset($this->pet_weight)) $petArray['pet_weight'] = $this->pet_weight;
        if(isset($this->birth_year)) $petArray['birth_year'] = $this->birth_year;
        if(isset($this->species)) $petArray['species'] = $this->species;
        if(isset($this->fav_food)) $petArray['fav_food'] = $this->fav_food;
        if(isset($this->fav_hobby)) $petArray['fav_hobby'] = $this->fav_hobby;
        if(isset($this->fav_color)) $petArray['fav_color'] = $this->fav_color;

        return $petArray;
    }
}