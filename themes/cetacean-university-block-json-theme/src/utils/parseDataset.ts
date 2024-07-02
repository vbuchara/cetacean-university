import { isString } from "./typeCheck";

export function parseDataset(dataset: DOMStringMap): Record<string, any>{
    const datasetEntries = Object.entries(dataset);

    const isValidEntry = (entry: (typeof datasetEntries)[number]): entry is [string, string] => {
        const [_, value] = entry;
        return isString(value);
    }

    const mapDatasetEntries = (entry: [string, string]): [string, any] => {
        const [key, value] = entry;

        try{
            return [key, JSON.parse(value)];
        } catch {
            return [key, value];
        }
    };

    const parsedDatasetEntries = datasetEntries
        .filter(isValidEntry)
        .map(mapDatasetEntries);

    return Object.fromEntries<Record<string, any>>(parsedDatasetEntries);
}