import Child from '@/components/children/Child';
import Parent from '@/components/children/Parent';
import SecondChild from '@/components/children/SecondChild';

const ChildrenPropExample = () => {
    return (
        <div>
            <div>ChildrenPropExample</div>
            <Parent>
                {/* <Child /> */}
                <SecondChild />
            </Parent>
        </div>
    );
};

export default ChildrenPropExample;
