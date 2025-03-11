import React from 'react';

const SubCategoryList = ({ subcategories, subSubcategories }) => {
    return (
        <ul className="c-topmenu_list-categoris_items">
            {subcategories.map((subcategory) => (
                <li
                    key={subcategory.id}
                    className="c-topmenu_sublist-li c-topmenu_sublist-main"
                >
                    <a href={subcategory.link} className="c-topmenu_list-category">
                        {subcategory.name}
                    </a>
                    {/* نمایش زیرزیرمجموعه‌ها */}
                    {subSubcategories.some(
                        (subSub) => subSub.subcategoryId === subcategory.id
                    ) && (
                        <ul className="c-topmenu_sublist-child">
                            {subSubcategories
                                .filter(
                                    (subSub) =>
                                        subSub.subcategoryId === subcategory.id
                                )
                                .map((subSub) => (
                                    <li key={subSub.id}>
                                        <a
                                            href={subSub.link}
                                            className="c-topmenu_sublist-child-a"
                                        >
                                            {subSub.name}
                                        </a>
                                    </li>
                                ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default SubCategoryList;
