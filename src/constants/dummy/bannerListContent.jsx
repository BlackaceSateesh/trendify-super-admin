import { FiEye } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";

export const webBannerList = {
    data: [
        {
            id: 1,
            bannerName: 'Hero Banner',
            bannerType: 'Group Banner',
            imageCount: '4 Image Banner',
            action: [],
        },
        {
            id: 2,
            bannerName: 'Slider Banner',
            bannerType: 'Single Banner',
            imageCount: '1 Image Banner',
            action: [],
        },
        {
            id: 3,
            bannerName: 'Trendify Banner',
            bannerType: 'Group Banner',
            imageCount: '2 Image Banner',
            action: [],
        },
        {
            id: 4,
            bannerName: 'Brand Banner',
            bannerType: 'Single Banner',
            imageCount: '1 Image Banner',
            action: [],
        },

    ]
}

export const BannerColumns = [
    {
        name: 'SL',
        selector: row => row.id,
    },
    {
        name: 'Banner Application Type',
        selector: row => row.bannerType,
    },
    {
        name: "Collage Type",
        selector: row => row.collageType
    },
    {
        name: 'Image Count',
        selector: row => row.imageCount,
    },
    {
        name: 'Action',
        selector: row => (
            <div className="actionBtns">
                <button onClick={row.action[0]}>
                    <FiEye />
                </button>
                <button onClick={row.action[1]}>
                    <MdDeleteOutline />
                </button>
            </div>
        ),
    },
]


export const mobileBannerList = {
    data: [
        {
            id: 1,
            bannerName: 'Hero Banner',
            bannerType: 'Group Banner',
            imageCount: '4 Image Banner',
            action: [],
        },
        {
            id: 2,
            bannerName: 'Slider Banner',
            bannerType: 'Single Banner',
            imageCount: '1 Image Banner',
            action: [],
        },
        {
            id: 3,
            bannerName: 'Trendify Banner',
            bannerType: 'Group Banner',
            imageCount: '2 Image Banner',
            action: [],
        },
        {
            id: 4,
            bannerName: 'Brand Banner',
            bannerType: 'Single Banner',
            imageCount: '1 Image Banner',
            action: [],
        },
        {
            id: 5,
            bannerName: 'Collage Banner',
            bannerType: 'Group Banner',
            imageCount: '4 Image Banner',
            action: [],
        },


    ]
}

export const mobileBannerColumns = {
    column: [
        {
            name: 'SL',
            selector: row => row.id,
        },
        {
            name: 'Banner Name',
            selector: row => row.bannerName,
        },
        {
            name: 'Banner Type',
            selector: row => row.bannerType,
        },
        {
            name: 'Image Count',
            selector: row => row.imageCount,
        },
        {
            name: 'Action',
            selector: row => (
                <div className="actionBtns">
                    <button onClick={row.action[0]}>
                        <FiEye />
                    </button>
                    <button onClick={row.action[1]}>
                        <MdDeleteOutline />
                    </button>
                </div>
            )
        },
    ]
};