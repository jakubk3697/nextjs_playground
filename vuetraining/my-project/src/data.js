let pagesJson = localStorage.getItem('pages');
let pagesStore = JSON.parse(pagesJson);

export default {
    getAllPages() {
        return pagesStore;
    },

    getSinglePage(index) {
        return pagesStore[index];
    },

    editPage(index, page) {
        pagesStore[index] = page;
        localStorage.setItem('pages', JSON.stringify(pagesStore));
    }
}