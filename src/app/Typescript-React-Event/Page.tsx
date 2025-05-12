import type React from 'react';

const EventExample = () => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log('Button clicked');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Input changed', e.target.value);
    };

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.preventDefault();
        console.log('Delete button clicked', id);
    };

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <form>
                    <input
                        onChange={handleChange}
                        type='text'
                        placeholder='search anything...'
                    />
                    <button onClick={handleClick}>search</button>
                </form>

                <form action=''>
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
                </form>

                <hr style={{ marginTop: '20px', marginBottom: '10px' }} />

                <form action=''>
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
                </form>
            </div>
        </>
    );
};

export default EventExample;
