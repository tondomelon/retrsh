import Airtable from "airtable";

const token = 'patHLycEd8U6PziBh.9f6dca6c66695da5ca3bb1d998a83e5c70e1401c75472df5d2c6c2ac7d5b0c4e';

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
});

let base = Airtable.base('appmeu2WlZYsDdB7g');

function getData() {
    return new Promise((resolve, reject) => {
        const content = [];
        base('Base')
            .select({maxRecords: 100})
            .firstPage().then((records) => {
                records.forEach((item) => {
                    content.push({
                        id: item.id,
                        title: item.fields['Name'],
                        description: item.fields['Notes'],
                        backgroud: item.fields['Background'],
                        color: item.fields['Color'],
                        cover: item.fields['Cover'],
                        link: '#'
                    })
                })

                resolve(content);
            })
    })
}

export {getData}