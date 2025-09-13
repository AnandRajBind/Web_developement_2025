-- if users(referece/parent table) table ka koi row (user) delete hota hai to uske corresponding (address) foreign key (user id)ko delete karne ke liye ham "on delete cascade" ka use  karte hai.
use startersql;
-- create table addresses(
-- id int auto_increment primary key , 
-- user_id int,
-- street varchar(100),
-- city varchar(100),
-- state varchar(100),
-- pincode varchar(10),
-- constraint foreign_user foreign key(user_id) references users(id) on delete cascade
-- );

-- insert into addresses (user_id, street, city,state, pincode)
-- values
-- (1, '221B MG Road', 'Mumbai', 'Maharashtra', '400001'),
-- (22, '14 Park Street', 'Kolkata', 'West Bengal', '700016'),
-- (3, '32 Residency Road', 'Bengaluru', 'Karnataka', '560025'),
-- (24, '5 North Usman Road', 'Chennai', 'Tamil Nadu', '600017'),
-- (5, '17 Hazratganj', 'Lucknow', 'Uttar Pradesh', '226001'),
-- (6, '55 Banjara Hills', 'Hyderabad', 'Telangana', '500034'),
-- (7, '88 Connaught Place', 'Delhi', 'Delhi', '110001'),
-- (8, '10 MG Marg', 'Dehradun', 'Uttarakhand', '248001'),
-- (9, '23 Brigade Road', 'Bengaluru', 'Karnataka', '560025'),
-- (10, '45 Marine Drive', 'Mumbai', 'Maharashtra', '400020'),
-- (11, '67 Ashoka Road', 'Delhi', 'Delhi', '110001'),
-- (12, '89 MG Road', 'Pune', 'Maharashtra', '411001'),
-- (13, '12 Brigade Road', 'Bengaluru', 'Karnataka', '560025'),
-- (14, '34 Park Street', 'Kolkata', 'West Bengal', '700016'),
-- (15, '56 Connaught Place', 'Delhi', 'Delhi', '110001'),
-- (16, '78 Marine Drive', 'Mumbai', 'Maharashtra', '400020'),
-- (17, '90 MG Marg', 'Dehradun', 'Uttarakhand', '248001'),
-- (18, '11 North Usman Road', 'Chennai', 'Tamil Nadu', '600017'),
-- (19, '33 Residency Road', 'Bengaluru', 'Karnataka', '560025'),
-- (20, '22 Hazratganj', 'Lucknow', 'Uttar Pradesh', '226001');

 -- delete from addresses where id=1;
 delete from users where id=24;

select * from users;
select * from addresses;
-- drop table addresses;
-- drop table users;