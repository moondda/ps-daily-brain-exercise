function solution(n, weak, dist) {
    
        const getPermutations = (arr) => {
        if (arr.length === 0) return [[]];
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
            console.log(rest,"rest")
            const restPerms = getPermutations(rest);
            for (const perm of restPerms) {
                result.push([arr[i], ...perm]);
            }
        }
        return result;
            
    };
            const k = getPermutations([1,2]);
}