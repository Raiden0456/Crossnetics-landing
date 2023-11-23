interface ImageInfo {
    url: string;
    copyright: string;
}

interface News {
    image: ImageInfo;
    title: string;
    author: string;
    tags: string[];
}

interface NewsProps { 
   news: News;
}

interface NewsBlock2Props {
    news: News[];
    title: string;
    subtitle: string;
    text: string;
}

export const NewsBlock1: NewsProps = {
    news: {
        image: {
            url: 'https://images.unsplash.com/photo-1519041266000-208397329799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            copyright: 'Photo by NAME on Unsplash'
        },
        title: 'News Block 1',
        author: 'NAME',
        tags: ['News', 'Update', 'Daily']
    }      
}

export const NewsBlock2: NewsBlock2Props = {
    news: [
        {
            image: {
                url: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                copyright: 'Photo by NAME on Unsplash'
            },
            title: 'News Block 2',
            author: 'NAME',
            tags: ['Global', 'Economy', 'Markets']
        },
        {
            image: {
                url: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
                copyright: 'Photo by ANOTHER NAME on Unsplash'
            },
            title: 'News Block 3',
            author: 'ANOTHER NAME',
            tags: ['Technology', 'Innovation', 'Future']
        }
    ],
    title: 'Multiple News Blocks',
    subtitle: 'A compilation of the latest news',
    text: 'Here you can find the latest updates on various topics around the world...'
}
