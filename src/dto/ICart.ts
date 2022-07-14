export interface ICart {
    value: number,
    items: [
        {
            uniqueId: string;
            id: string;
            productId: string;
            productRefId: null;
            refId: null;
            ean: string,
            name: string;
            skuName: string;
            modalType: null;
            parentItemIndex: null;
            parentAssemblyBinding: null;
            assemblies: [];
            priceValidUntil: string;
            tax: number;
            price: number;
            listPrice: number;
            manualPrice: null;
            sellingPrice: number;
            rewardValue: number;
            isGift: boolean;
            additionalInfo: {
                brandName: string;
                brandId: string;
                offeringInfo: null;
                offeringType: null;
                offeringTypeId: null
            },
            productCategoryIds: string;
            productCategories: { string: string };
            quantity: number;
            seller: string;
            preSaleDate: null;
            sellerChain: [string];
            imageUrl: string;
            components: [];
            bundleItems: [];
            attachments: [];
            attachmentOfferings: [];
            offerings: [];
            priceTags: [
                {
                    name: string;
                    value: number;
                    rawValue: number;
                    isPercentual: boolean;
                    identifier: string
                }
            ],
            availability: string;
            measurementUnit: string;
            unitMultiplier: number;
            manufacturerCode: null
        },
    ],
    totalizers: [
        {
            id: number
            name: string;
            value: number
        }
    ],
    itemMetadata: {
        items: [
            {
                id: string;
                seller: string;
                name: string;
                skuName: string;
                productId: string;
                refId: null;
                ean: string;
                imageUrl: string;
                assemblyOptions: [];
            },

        ]
    }
}