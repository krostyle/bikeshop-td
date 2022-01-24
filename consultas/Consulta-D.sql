select brands.brand_id, brands.brand_name, sum(stocks.quantity)
from brands
inner join products
on brands.brand_id=products.brand_id
inner join stocks
on products.product_id=stocks.product_id
group by brands.brand_id, brands.brand_name
order by sum(stocks.quantity) desc