import ChildrenPropExample from '@/app/2-children-prop-example/Page';
import UseContextExample from '@/app/5-useContext-Example/page';
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
                {/* <EventExample /> */}
                <UseContextExample />
            </RootLayout>
        </>
    );
}

export default App;
