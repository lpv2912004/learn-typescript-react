import Item from '@/app/7-typescript-generics-example/Item';

const ItemList = () => {
    return (
        <div>
            <Item
                id={1}
                title='check Item'
                extra={[
                    {
                        id: 1,
                        title: 'check Item'
                    }
                ]}
            />
        </div>
    );
};

export default ItemList;
