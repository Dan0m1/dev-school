function unpackSausages(track) {
    let result = [];
    let counterOfValidBoxes = 0;

    for(const box of track) {
        for (const sausagePackage of box) {
            if(sausagePackage.slice(1,5).length === 4 && sausagePackage[0] === "[" && sausagePackage[5] === "]" && sausagePackage.slice(1,5) === sausagePackage[1].repeat(4)){
                if(++counterOfValidBoxes!== 5) result.push(...sausagePackage.slice(1,5).split(''));
                else counterOfValidBoxes = 0;
            }
        }
    }
    return result.join(' ');
}