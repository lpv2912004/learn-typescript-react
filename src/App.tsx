import ChildrenPropExample from '@/app/2-children-prop-example/Page';
import RootLayout from '@/app/Layout';
import EventExample from '@/app/Typescript-React-Event/Page';
import PostList from '@/components/PostList';
import '@styles/App.css';

function App() {
    return (
        <>
            <RootLayout>
                {/* <PostList /> */}
                {/* <ChildrenPropExample /> */}
                <EventExample />
            </RootLayout>
        </>
    );
}

export default App;
