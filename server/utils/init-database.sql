CREATE DATABASE fleming

INSERT INTO `admins` (`email`, `password`) VALUES
('admin', 'admin');

-- --------------------------------------------------------

--
-- Dumping data for table `hotels`
--

INSERT INTO `hotels` (`ID`, `Name`, `Governorates`, `City`, `Stars`, `Description`) VALUES
(1, 'Kingsbery', 'as', 'Colombo', 5, 'Good Hotel'),
(2, 'Galadari', 'G', 'Gallface', 5, 'sadasdasdsdadsa'),
(3, 'Shrangila', 'S', 'Matara', 4, 'asasfasfsdfsdfsdfsdf'),
(4, 'Shrangila', 'S', 'Matara', 4, 'asasfasfsdfsdfsdfsdf'),
(5, 'Shrangila', 'S', 'Matara', 4, 'asasfasfsdfsdfsdfsdf'),
(6, 'Shrangila', 'S', 'Matara', 4, 'asasfasfsdfsdfsdfsdf'),
(7, 'Shrangila', 'S', 'Matara', 4, 'asasfasfsdfsdfsdfsdf'),
(8, 'Shrangila', 'MUSCAT', 'MUSCAT', 4, 'Good'),
(9, 'Shrangila', 'MUSCAT', 'MUSCAT', 4, 'Good'),
(10, 'Shrangila', 'MUSCAT', 'MUSCAT', 4, 'Good'),
(11, 'Shrangila', 'MUSCAT', 'MUSCAT', 4, 'Good'),
(12, 'Shrangila', 'MUSCAT', 'MUSCAT', 4, 'Good'),
(13, 'Shrangila', 'MUSCAT', 'MUSCAT', 4, 'Good'),
(14, 'Shrangila', 'DHOFAR', 'RAKHYUT', 4, 'Good'),
(15, 'Shrangila', 'DHOFAR', 'RAKHYUT', 4, 'Good'),
(16, 'Shrangila', 'DHOFAR', 'RAKHYUT', 4, 'Good'),
(17, 'Shrangila', 'DHOFAR', 'RAKHYUT', 4, 'Good'),
(18, 'Shrangila', 'DHOFAR', 'RAKHYUT', 4, 'Good'),
(19, 'Shrangila', 'DHOFAR', 'RAKHYUT', 4, 'Good'),
(20, 'Shrangila', 'DHOFAR', 'RAKHYUT', 4, 'Good'),
(21, 'Shrangila', 'DHOFAR', 'RAKHYUT', 4, 'Good'),
(22, 'Shrangila', 'DHOFAR', 'RAKHYUT', 4, 'Good'),
(23, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good'),
(24, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 3, 'Good'),
(25, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 3, 'Good'),
(26, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good'),
(27, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 5, 'Good'),
(28, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 3, 'Good'),
(29, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 3, 'Good'),
(30, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good'),
(31, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 3, 'Good'),
(32, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 3, 'Good'),
(33, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good'),
(34, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good'),
(35, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good'),
(36, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 3, 'Good'),
(37, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 3, 'Good'),
(38, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 5, 'Good'),
(39, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 3, 'Good'),
(40, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good'),
(41, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good'),
(42, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good'),
(43, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good'),
(44, 'Shrangila', 'ADH DHAHIRAH', 'IBRI', 4, 'Good');

-- --------------------------------------------------------

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`Type`, `TypeArabic`, `Beds`, `Rooms`, `Price`, `Description`, `DescriptionArabic`, `HotelID`) VALUES
('Small', '', 1, 20, 1200, 'A/C Not included', '', 1),
('Medium', '', 3, 20, 1200.4, 'with ac', '', 6),
('Large', '', 5, 10, 2500, 'perfect for family', '', 6),
('Medium', '', 3, 20, 1200.4, 'with ac', '', 7),
('Large', '', 5, 10, 2500, 'perfect for family', '', 7),
('32', '32', 23, 2, 3, '3', '3', 31),
('231', '32', 32, 32, 32, '32', '3', 32),
('asd', 'asd', 32, 32, 32, 's', 'sdf', 33),
('32', '32', 32, 2, 23, 'sdf', 'sdf', 33),
('asd', 'asd', 32, 3, 32, '32', '32', 36),
('sad', 'asd', 32, 32, 32, 'sdf', 'sdf', 38),
('sad', 'sad', 32, 32, 32, 'dsf', 'dsf', 39),
('321', '32', 32, 23, 32, '32', '32', 40),
('sda', 'sda', 32, 32, 32, 'sdf', 'sdf', 41),
('32', '3', 32, 32, 32, '32', '32', 42),
('dsf', 'sdf', 34, 43, 43, 'dfg', 'dfg', 43),
('dsf', '34t', 34, 34, 34, 'dfsg', 'dfg', 44);
