use startersql;

--  Wildcard Operators
select * from users where name like "_n_n%";

-- LIMIT is used to limit the number of rows returned. OFFSET skips a number of rows before starting to return rows.

select * from users
order by id
limit 5 offset 3;

-- alternative way for

SELECT * FROM users
ORDER BY id
LIMIT 3, 5;

-- DISTINCT is used to return only unique values.

SELECT DISTINCT gender FROM users;

-- TRUNCATE removes all rows from a table, but keeps the table structure.

truncate table addresses;
select * from addresses;

