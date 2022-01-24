select products.product_id, products.product_name, stocks.quantity
from categories
inner join products
on categories.category_id=products.category_id
inner join stocks
on stocks.product_id=products.product_id
inner join stores
on stores.store_id=stocks.store_id
where lower(categories.category_name)=lower('Electric Bikes')
and lower(stores.store_name)=lower('Santa Cruz Bikes')
order by products.product_name;
