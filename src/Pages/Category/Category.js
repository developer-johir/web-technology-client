import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/web-categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    })
    return (
        <div>
            <h2>This is Category: {categories.length}</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/courses/${category.id}`}>{category.name}</Link>
                    </p>)
                    
                }
            </div>
        </div>
    );
};

export default Category;