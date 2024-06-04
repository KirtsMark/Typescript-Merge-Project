import { merge } from '../src/merge';
describe('merge function', () => {
    test('should merge and sort three collections', () => {
        const collection_1 = [1, 3, 5, 7];
        const collection_2 = [9, 6, 4, 2];
        const collection_3 = [0, 8, 10, 12];
        const result = merge(collection_1, collection_2, collection_3); 
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]); 
    }); 
    test('should handle empty collections', () => { 
        const collection_1: number[] = [];
        const collection_2: number[] = []; 
        const collection_3: number[] = []; 
        const result = merge(collection_1, collection_2, collection_3); 
        expect(result).toEqual([]); 
    }); 
    test('should handle collections with negative numbers', () => { 
        const collection_1 = [-10, -3, 2]; 
        const collection_2 = [5, 0, -1]; 
        const collection_3 = [-4, -2, 8]; 
        const result = merge(collection_1, collection_2, collection_3); 
        expect(result).toEqual([-10, -4, -3, -2, -1, 0, 2, 5, 8]); 
    }); 
    test('should handle collections of different lengths', () => { 
        const collection_1 = [1]; 
        const collection_2 = [6, 5, 2]; 
        const collection_3 = [0, 3, 8, 10, 12]; 
        const result = merge(collection_1, collection_2, collection_3); 
        expect(result).toEqual([0, 1, 2, 3, 5, 6, 8, 10, 12]); 
    }); 
});
