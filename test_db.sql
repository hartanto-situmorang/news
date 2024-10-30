-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2024 at 12:43 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'test', 'tes', '2024-10-29 13:46:36', '2024-10-29 13:46:36'),
(3, 'SPORT', 'Sport', '2024-10-30 10:10:53', '2024-10-30 10:10:53');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `id_categories` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `image`, `author`, `id_categories`, `createdAt`, `updatedAt`) VALUES
(4, 'Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global', 'Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan global...', 'ekonomi-indonesia.png', 'Hartanto', 1, '2024-10-30 11:03:56', '2024-10-30 11:03:56'),
(5, 'Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global', 'Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan global...', 'ekonomi-indonesia.png', 'Hartanto', 1, '2024-10-30 11:05:58', '2024-10-30 11:05:58'),
(6, 'unit test Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global', 'unit test Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan global...', 'unit test ekonomi-indonesia.png', 'Hartanto', 3, '2024-10-30 11:08:02', '2024-10-30 11:08:02'),
(7, 'unit test Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global', 'unit test Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan global...', 'unit test ekonomi-indonesia.png', 'Hartanto', 3, '2024-10-30 11:09:46', '2024-10-30 11:09:46'),
(8, 'unit test Perkembangan Ekonomi Indonesia di Tengah Ketidakpastian Global', 'unit test Ekonomi Indonesia menunjukkan tren positif meskipun ada tantangan global...', 'unit test ekonomi-indonesia.png', 'Hartanto', 3, '2024-10-30 11:10:43', '2024-10-30 11:10:43');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20241029094232-create-categories.js'),
('20241029094706-create-news.js'),
('20241029095948-create-users.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contact` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `contact`, `image`, `role`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(8, 'Test Admin', '1234567890', 'test-image.png', 'admin', 'admin1233', '$2b$10$w4hp4MooshE0c2REntnKp.HlzpwvR86xNY96tMQNeMAqQNFtwjVda', '2024-10-30 10:22:33', '2024-10-30 10:22:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
