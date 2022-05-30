-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2022 at 11:49 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pickdate`
--

-- --------------------------------------------------------

--
-- Table structure for table `availabilities`
--

CREATE TABLE `availabilities` (
  `id` int(11) NOT NULL,
  `start` varchar(30) NOT NULL,
  `end` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `availabilities`
--

INSERT INTO `availabilities` (`id`, `start`, `end`) VALUES
(1, '20/02/20221', '24/02/2022'),
(2, '0.005494505494505494', '0.005494505494505494'),
(3, '0.005494505494505494', '0.005494505494505494'),
(4, '2', '2'),
(5, '255', '255'),
(6, '255', '255'),
(7, '55', '25'),
(8, '55', '25');

-- --------------------------------------------------------

--
-- Table structure for table `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `start` varchar(30) NOT NULL,
  `end` varchar(30) NOT NULL,
  `title` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `start`, `end`, `title`, `email`) VALUES
(5, '2022-05-26T18:20:13.438Z', '2022-05-26T18:20:13.438Z', 'majid', 'sdsqd'),
(6, '2022-05-26T18:20:13.438Z', '2022-05-26T18:20:13.438Z', 'majid', 'sdsqd'),
(7, '2022-05-26T18:20:13.438Z', '2022-05-26T18:20:13.438Z', 'majid', 'sdsqd'),
(8, '2022-05-26T18:20:13.438Z', '2022-05-26T18:20:13.438Z', 'majid', 'sdsqd'),
(9, '2022-05-26T18:20:13.438Z', '2022-05-26T18:20:13.438Z', 'majid', 'abdelmajidbenabdallah1@gmail.c'),
(10, '2022-05-26T20:09:18.042Z', '2022-05-26T20:09:18.042Z', '', ''),
(11, '2022-05-26T21:23:19.027Z', '2022-05-26T21:23:19.027Z', '', 'benabdallah'),
(12, '2022-05-27T21:43:58.764Z', '2022-05-27T21:43:58.764Z', 'attata', 'tatataat');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `availabilities`
--
ALTER TABLE `availabilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `availabilities`
--
ALTER TABLE `availabilities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
