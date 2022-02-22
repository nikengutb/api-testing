const pactum = require('pactum');

describe('Retrieving data for country Sweden', () => {

    test('Should yield HTTP status code 200', async () => {

        await pactum.spec()
            .get('https://restcountries.com/v3.1/name/sweden?fullText=true')
            .expectStatus(200)
    });

    test('Should yield Content-Type header containing value "application/json"', async () => {

        await pactum.spec()
            .get('https://restcountries.com/v3.1/name/sweden?fullText=true')
            .expectHeaderContains('content-type', 'application/json')
    });

    test('Should yield "Kingdom of Sweden" as the official name within the name', async () => {

        await pactum.spec()
            .get('https://restcountries.com/v3.1/name/sweden?fullText=true')
            .expectJsonMatch('0.name.official', 'Kingdom of Sweden')
    });

    test('Should yield ".se" as the TLD (top level domain)', async () => {

        await pactum.spec()
            .get('https://restcountries.com/v3.1/name/sweden?fullText=true')
            .expectJsonMatch('0.tld.0', '.se')
    });

});

describe('Retrieving all countries', () => {

    test('Should yield a list of 250 countries', async () => {

        await pactum.spec()
            .get('https://restcountries.com/v3.1/all')
            .expectJsonLength(250)
    });
});