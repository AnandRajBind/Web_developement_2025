use startersql;
-- select  gender , avg(salary) from users group by gender;
-- select  gender , avg(salary) as "Average Salary" from users group by gender;

-- note--> haaving ka use "group by" bad use hota hai. because group by ke bad "where"  work nhi karta hai.
select  gender as "Gender" , avg(salary) as "Average Salary", count(*) as "count" 
from users where  id<5000 group by gender with rollup
having avg(salary)<69000 
;


-- select referred_by_id, count(*) as total_referred
-- from users
-- where referred_by_id is not null
-- group by referred_by_id 
-- having count(*) >1;


select * from users;
 
