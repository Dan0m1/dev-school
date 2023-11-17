INSERT INTO dvdrental.public.city (city, country_id)
VALUES ('Hadiach',
        (SELECT country_id FROM dvdrental.public.country WHERE country = 'Ukraine')
       )
RETURNING *