select categories.category_id, categories.category_name, count(products.product_id)
from categories
inner join products
on categories.category_id=products.category_id
group by categories.category_id, categories.category_name
order by count(products.product_id) desc