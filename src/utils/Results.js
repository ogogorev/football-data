export function getResultsForMatchday(results, matchday) {
    if (!results.fixtures) {
        console.warn('fixtures undefined');
        return [];
    }
    return results.fixtures.filter(fixture => (fixture.matchday == matchday));
}

export function clearDataString(str) {
    return str.replace(/T/, ' ').replace(/:00Z/, '');
}
