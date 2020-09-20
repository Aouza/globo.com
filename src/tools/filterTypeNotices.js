const filteredType = (arr, type) => {

    const response = arr.filter(news => {
        return news.type === type;
    });

    return response;
}

export default filteredType;
