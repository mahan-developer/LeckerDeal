import React from 'react';
import SubCategoryItem from './SubCategoryItem';

const SubCategoryList = ({ items }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <SubCategoryItem
                    key={index}
                    name={item.name}
                    link={item.link}
                    isMain={item.isMain}
                />
            ))}
        </ul>
    );
};

export default SubCategoryList;
