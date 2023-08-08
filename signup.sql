-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 20, 2023 at 07:36 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signup`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`name`, `email`, `password`) VALUES
('gameel', 'dddd@gmail.com', 'gggg1234'),
('gameel', 'dddd@gmail.com', 'gggg1234'),
('oday', 'oday.igbaria.oi@gmail.com', 'ooooooooo'),
('gameel', 'rami.yosef80@gmail.com', 'gameel12'),
('Odayigb', 'oday12.igbaria.oi@gmail.com', '123'),
('muhamad', 'muhamad@gmail.com', 'mmmmmmmmmm'),
('ahmad', 'ahmad@gmail.com', 'ah12345'),
('ahmad', 'ahmad@gmail.com', 'ah12345'),
('mhmoud', 'mahmoud@gmail.com', 'mh12345'),
('oday', 'oday.igbaria.12oi@gmail.com', '2saaddz'),
('peter', 'peter.karkabi@gmail.com', 'peter123'),
('ggg', 'ggg@gmail.com', 'ggggggg'),
('ggg2', 'ggg2@gmail.com', 'ggggggg4'),
('basoul2', 'basoul@gmail.com', 'bbbbbb'),
('jawaad', 'vvv@gmail.com', 'xxxxxx'),
('farha', 'fra7kh8@gmail.com', 'Aode12345');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `catalogNumber` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` double(50,0) NOT NULL,
  `quantity` int(127) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`catalogNumber`, `name`, `price`, `quantity`) VALUES
('2008-12A-2512', 'xiaomi 13 ultra', 3000, 50),
('3002-21b-2513', 'galaxy s23 ultra	', 3600, 50);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
