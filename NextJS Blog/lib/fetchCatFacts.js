export const fetchCatFacts = async () => {
    const res = await fetch('https://cat-fact.herokuapp.com/facts');
    const data = await res.json();
    return data;
}