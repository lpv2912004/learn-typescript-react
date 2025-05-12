type ItemProps<T> = {
    id: number;
    title: string;
    extra: T[];
};

const Item = (props: ItemProps<object>) => {
    return <div>Item</div>;
};

export default Item;
