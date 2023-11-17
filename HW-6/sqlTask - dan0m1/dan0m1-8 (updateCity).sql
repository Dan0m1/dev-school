UPDATE dvdrental.public.city
SET city = 'Dnipro'
WHERE city_id = (SELECT city_id FROM city WHERE city = 'Hadiach')
RETURNING *;