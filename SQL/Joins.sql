use startersql;

select * from users;
select * from addresses;

-- inner joins--> Returns only the matching rows from both tables.
-- select users.name, addresses.city, addresses.state, addresses.id as address_id from users  inner join addresses on  users.id=addresses.user_id;

-- left joins--> Returns all rows from the left table (users), and matching rows from the right table (addresses). If no match is found, NULLs are returned.
 -- select users.name, addresses.city, addresses.state, addresses.id as address_id from users  left join addresses on  users.id=addresses.user_id;

-- right joins Returns all rows from the right table (addresses), and matching rows from the left table (users). If no match is found, NULLs are returned.
 select users.name, users.gender, addresses.city, addresses.state, addresses.id as address_id from users  right join addresses on  users.id=addresses.user_id;
