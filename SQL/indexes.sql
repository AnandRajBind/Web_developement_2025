use startersql;
-- select * from users where email="aarav@example.com" and gender ="male";
-- single column index  
-- create index idx_gender on users(gender); 

-- multi column index  
-- create index idx_gender_salary on users(gender, salary); 

 -- drop index idx_gender_salary on users;
show indexes from users;
