import RootStore from "./RootStore";

const storeProvider = RootStore.create({
    contents:[
        {
            id: '1',
            title: 'Name',
            description: 'Type the GPU name',
            seen: false,
            notes: '',
        },
        {
            id: '2',
            title: 'Manufacturer website',
            description: 'Enter the URL',
            seen: false,
            notes: '',
        },
        {
            id: '3',
            title: 'Group name',
            description: 'Type the Group',
            seen: false,
            notes: '',
        },
        {
            id: '4',
            title: 'GTX series',
            description: 'Type the GTX model',
            seen: true,
            notes: 'Gtx 1070',
        }
    ]
})

export default storeProvider;