select product_id, product_name, model_year, list_price
from products
where upper(product_name) like upper('%ladies%')
order by list_price desc;