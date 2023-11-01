function groupAnagrams(words){
    let map = new Map();
    for (const el of words)
    {
        let word = el.split('').sort().join('');
        if(!map.has(word))
        {
            map.set(word, [el]);
        }
        else
        {
            map.get(word).push(el);
        }
    }
    return Array.from(map.values());
}

