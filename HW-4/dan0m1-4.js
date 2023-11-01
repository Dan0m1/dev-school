class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.items = [...collection];
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        return this.items.length;
    }
    pageCount() {
        return Math.ceil(this.itemCount()/this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
        if(pageIndex < 0 || pageIndex > this.pageCount() - 1) return -1;
        if(pageIndex === this.pageCount() - 1) return (this.itemCount()%this.itemsPerPage === 0)? this.itemsPerPage : this.itemCount()%this.itemsPerPage;
        return this.itemsPerPage;
    }
    pageIndex(itemIndex) {
        if(itemIndex < 0 || itemIndex > this.itemCount() - 1) return -1;
        return Math.floor(itemIndex/this.itemsPerPage);
    }
}