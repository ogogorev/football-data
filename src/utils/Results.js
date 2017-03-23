export function getResultsForMatchday(results, matchday) {
    if (!results.fixtures) {
        console.warn('fixtures undefined');
        return [];
    }
    return results.fixtures.filter(fixture => (fixture.matchday == matchday));
}
