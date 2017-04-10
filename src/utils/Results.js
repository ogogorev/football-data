export function getResultsForMatchday(results, matchday) {
    if (!results.fixtures) {
        console.warn('fixtures undefined');
        return [];
    }
    return results.fixtures.filter(fixture => (fixture.matchday == matchday));
}

export function clearDataString(str) {
    str = str.replace(/T/, ' ').replace(/:00Z/, '').replace(/ .*/, '');
    let dataArr = str.split('-');
    return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
}
