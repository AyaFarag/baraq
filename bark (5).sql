-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2019 at 02:28 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bark`
--

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `path` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fileType` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pathType` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `srt` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `extention` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `name`, `path`, `size`, `fileType`, `pathType`, `srt`, `extention`, `created_at`, `updated_at`) VALUES
(8, 'Lv54-U79-L39-Act-FW.zip', 'zipper/1554121766/index.html', '602419', '1', '2', NULL, 'zip', '2019-04-01 10:29:26', '2019-04-01 10:29:26'),
(9, 'Lv54-U79-L39-Act-HS.zip', 'zipper/1554121850/index.html', '5378571', '1', '2', NULL, 'zip', '2019-04-01 10:30:51', '2019-04-01 10:30:51'),
(10, 'Lv54-U79-L39-Act-L.zip', 'zipper/1554122018/index.html', '196442', '1', '2', NULL, 'zip', '2019-04-01 10:33:38', '2019-04-01 10:33:38'),
(11, 'Lv54-U79-L39-Act-P.zip', 'zipper/1554122078/index.html', '420010', '1', '2', NULL, 'zip', '2019-04-01 10:34:38', '2019-04-01 10:34:38'),
(12, 'Lv54-U79-L39-Act-PY.zip', 'http://localhost:8000/uploads/zipper/1554122109/index.html', '557648', '1', '2', NULL, 'zip', '2019-04-01 10:35:09', '2019-04-01 10:35:09'),
(13, 'Lv54-U79-L39-Act-R.zip', 'http://localhost:8000/uploads/zipper/1554122179/index.html', '1230227', '1', '2', NULL, 'zip', '2019-04-01 10:36:19', '2019-04-01 10:36:19'),
(14, 'v720.mp4', 'http://localhost:8000/uploads/1554809710.mp4', '8474642', NULL, '2', NULL, 'mp4', '2019-04-01 10:37:21', '2019-04-09 09:35:10'),
(15, 'Lv54-U79-L39-Act-WL.zip', 'http://localhost:8000/uploads/zipper/1554122279/index.html', '7618287', '1', '2', NULL, 'zip', '2019-04-01 10:38:01', '2019-04-01 10:38:01'),
(16, 'Lv54-U79-L39-Act-WL.zip', 'http://localhost:8000/uploads/zipper/1554122325/index.html', '7618287', '1', '2', NULL, 'zip', '2019-04-01 10:38:47', '2019-04-01 10:38:47'),
(17, 'v720.mp4', 'http://localhost:8000/uploads/1554122359.mp4', '9501714', '0', '2', NULL, 'mp4', '2019-04-01 10:39:19', '2019-04-01 10:39:19'),
(18, 'v720.mp4', 'http://localhost:8000/uploads/1554122402.mp4', '6044357', '0', '2', '1554122402.vtt', 'mp4', '2019-04-01 10:40:02', '2019-04-01 10:40:02'),
(19, 'v720.mp4', 'http://localhost:8000/uploads/1554122440.mp4', '8474642', '0', '2', NULL, 'mp4', '2019-04-01 10:40:40', '2019-04-01 10:40:40'),
(21, NULL, 'dddd', NULL, NULL, '0', NULL, NULL, '2019-04-03 06:53:11', '2019-04-03 06:53:11'),
(22, 'v720.mp4', 'http://localhost:8000/uploads/1554282231.mp4', '8474642', NULL, '2', '1554282231.mp4', 'mp4', '2019-04-03 06:54:14', '2019-04-03 07:03:51'),
(23, 'v720.mp4', 'http://localhost:8000/uploads/1554282562.mp4', '8474642', NULL, '2', NULL, 'mp4', '2019-04-03 07:09:22', '2019-04-03 07:09:22'),
(24, 'v720.mp4', 'http://localhost:8000/uploads/1554720666.mp4', '8474642', NULL, '2', NULL, 'mp4', '2019-04-08 08:49:52', '2019-04-08 08:51:06'),
(26, NULL, NULL, NULL, NULL, '0', NULL, NULL, '2019-04-09 09:31:24', '2019-04-09 09:31:24'),
(27, NULL, NULL, NULL, NULL, '0', NULL, NULL, '2019-04-16 08:58:49', '2019-04-16 08:58:49'),
(29, NULL, 'بثببث', NULL, NULL, '0', NULL, NULL, '2019-04-16 10:44:13', '2019-04-16 10:44:13'),
(30, 'Lv54-U79-L39-Act-FW.zip', 'zipper/1556797729/index.html', '602419', NULL, '2', NULL, 'zip', '2019-05-02 09:48:49', '2019-05-02 09:48:49'),
(31, 'Lv54-U79-L39-Act-FW.zip', 'zipper/1556798270/index.html', '602419', NULL, '2', NULL, 'zip', '2019-05-02 09:57:50', '2019-05-02 09:57:50'),
(32, 'Lv54-U79-L39-Act-FW.zip', 'zipper/1556798473/index.html', '602419', '\"1\"', '2', NULL, 'zip', '2019-05-02 10:01:13', '2019-05-02 10:01:13'),
(33, 'Lv54-U79-L39-Act-FW.zip', 'zipper/1556799785/index.html', '602419', '\"1\"', '2', NULL, 'zip', '2019-05-02 10:03:07', '2019-05-02 10:23:06'),
(34, 'Lv54-U79-L39-Act-FW.zip', 'zipper/1556799734/index.html', '602419', '\"1\"', '2', '1556799734.zip', 'zip', '2019-05-02 10:22:14', '2019-05-02 10:22:14'),
(35, 'Lv54-U79-L39-Act-FW.zip', 'zipper/1556799847/index.html', '602419', '\"1\"', '2', NULL, 'zip', '2019-05-02 10:24:07', '2019-05-02 10:24:07'),
(36, 'Lv54-U79-L39-Act-FW.zip', 'zipper/1556799894/index.html', '602419', '\"1\"', '2', NULL, 'zip', '2019-05-02 10:24:54', '2019-05-02 10:24:54'),
(37, 'v720.mp4', '1556799935.mp4', '8474642', '\"0\"', '2', NULL, 'mp4', '2019-05-02 10:25:35', '2019-05-02 10:25:35'),
(38, 'v720.mp4', '1556799985.mp4', '6044357', '\"0\"', '2', '1556799985.vtt', 'mp4', '2019-05-02 10:26:25', '2019-05-02 10:26:25'),
(39, NULL, 'dcdc', NULL, NULL, '1', NULL, NULL, '2019-05-05 07:10:35', '2019-05-05 07:10:35'),
(40, NULL, 'hjgjngv', NULL, NULL, '1', NULL, NULL, '2019-05-06 05:47:39', '2019-05-06 05:47:39');

-- --------------------------------------------------------

--
-- Table structure for table `lesson_progresses`
--

CREATE TABLE `lesson_progresses` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `lesson_id` int(10) UNSIGNED NOT NULL,
  `tap` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lesson_structures`
--

CREATE TABLE `lesson_structures` (
  `id` int(10) UNSIGNED NOT NULL,
  `type` int(11) NOT NULL,
  `arName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort` int(11) DEFAULT NULL,
  `show` tinyint(1) NOT NULL DEFAULT '0',
  `file_id` int(10) UNSIGNED NOT NULL,
  `lesson_id` int(10) UNSIGNED NOT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `creator` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lesson_structures`
--

INSERT INTO `lesson_structures` (`id`, `type`, `arName`, `enName`, `sort`, `show`, `file_id`, `lesson_id`, `code`, `created_at`, `updated_at`, `creator`, `logo`) VALUES
(4, 0, 'شاهد وتعلم', 'شاهد وتعلم', 0, 0, 33, 78, 'dedwe', '2019-05-02 10:03:07', '2019-05-02 10:23:06', 'Admin', '1556799786.png'),
(5, 1, 'لاحظ وتعلم', 'لاحظ وتعلم', 1, 0, 34, 78, 'jhmhm', '2019-05-02 10:22:14', '2019-05-02 10:22:14', 'Admin', '1556799734.png'),
(6, 9, 'استمع وتعلم', 'استمع وتعلم', 2, 0, 35, 78, 'بلىبى', '2019-05-02 10:24:07', '2019-05-02 10:24:07', 'Admin', '1556799847.png'),
(7, 11, 'غن وتعلم', 'غن وتعلم', 3, 0, 36, 78, 'اغتةلتاةل', '2019-05-02 10:24:54', '2019-05-02 10:24:54', 'Admin', '1556799894.png'),
(8, 2, 'انشوده', 'انشوده', 4, 0, 37, 78, 'لالى', '2019-05-02 10:25:35', '2019-05-02 10:25:35', 'Admin', '1556799935.png'),
(9, 3, 'كلماتي', 'كلماتي', 5, 0, 38, 78, 'اغتغاغا', '2019-05-02 10:26:25', '2019-05-02 10:26:25', 'Admin', '1556799985.png'),
(10, 5, 'xcdc', 'ddcdc', 4, 0, 39, 78, 'dcdfc', '2019-05-05 07:10:35', '2019-05-05 07:10:35', 'Admin', '1557047435.png'),
(11, 4, 'fdgd', 'fhgfh', NULL, 0, 40, 78, 'hgjgkj', '2019-05-06 05:47:39', '2019-05-06 05:47:39', 'Admin', '1557128859.png');

-- --------------------------------------------------------

--
-- Table structure for table `level_placement`
--

CREATE TABLE `level_placement` (
  `id` int(10) UNSIGNED NOT NULL,
  `level_id` int(10) UNSIGNED NOT NULL,
  `placement_path` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `level_placement`
--

INSERT INTO `level_placement` (`id`, `level_id`, `placement_path`, `created_at`, `updated_at`) VALUES
(5, 6, '1557067842', '2019-05-05 12:50:44', '2019-05-05 12:50:44');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2013_02_12_00000_create_structures_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_110000_create_password_resets_table', 1),
(4, '2019_02_13_113614_create_placement_tests_table', 1),
(5, '2019_02_13_113708_create_files_table', 1),
(6, '2019_02_13_113822_create_lesson_structures_table', 1),
(7, '2019_02_13_113857_create_quize_lessons_table', 1),
(8, '2019_02_13_114009_create_student_answers_table', 1),
(9, '2019_02_13_114031_create_student_progresses_table', 1),
(10, '2019_02_13_114101_create_lesson_progresses_table', 1),
(18, '2019_02_14_085056_create_student_histories_table', 2),
(19, '2019_03_14_090329_create_quizzes_table', 2),
(21, '2019_03_19_081507_create_user_parent_table', 3),
(22, '2019_04_01_120427_create_notifications_table', 4),
(23, '2019_04_09_095857_add_creator_to_users', 4),
(24, '2019_04_09_110801_add_creator_to_lesson_structures', 5),
(26, '2019_04_10_115403_create_school_user_table', 7),
(27, '2019_04_14_133032_add_logo_to_lesson_structures', 8),
(28, '2019_04_21_102815_create_placement_tests_table', 9),
(29, '2019_04_21_102947_create_level_placement_table', 9),
(30, '2019_04_10_111424_create_schools_table', 10);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `placement_tests`
--

CREATE TABLE `placement_tests` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `score` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total` tinyint(1) NOT NULL,
  `level_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `placement_tests`
--

INSERT INTO `placement_tests` (`id`, `user_id`, `score`, `total`, `level_id`, `created_at`, `updated_at`) VALUES
(65, 19, '0', 20, 6, '2019-05-07 07:09:21', '2019-05-07 07:09:21');

-- --------------------------------------------------------

--
-- Table structure for table `quize_lessons`
--

CREATE TABLE `quize_lessons` (
  `id` int(10) UNSIGNED NOT NULL,
  `lesson_id` int(10) UNSIGNED NOT NULL,
  `question` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `answer` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `trueAnswer` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `quizzes`
--

CREATE TABLE `quizzes` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `lesson_id` int(10) UNSIGNED NOT NULL,
  `studentResult` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finalResult` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `schools`
--

CREATE TABLE `schools` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `student_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mobile` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `logo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lat` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lng` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `social` text COLLATE utf8mb4_unicode_ci,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `schools`
--

INSERT INTO `schools` (`id`, `name`, `student_number`, `email`, `password`, `mobile`, `address`, `start_date`, `end_date`, `logo`, `website`, `lat`, `lng`, `social`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'xcvbcxvbcvbcvb', '1000', 'fdbbbb@admin.com', '$2y$10$jT/X6J1QrhVDuVA0wPmpXuQTMQv0RN3gPOl1hKDtKmvu3X4yEoewW', '01000691644', 'مجاورة 3 ميجا مول الدور الثالث، Cairo Governorate, Egypt', '2019-05-09', '2019-05-31', 'words.png', 'jgk', '30.045467101257', '31.234876632689975', 'hkhj', NULL, '2019-05-06 06:45:05', '2019-05-06 06:45:05');

-- --------------------------------------------------------

--
-- Table structure for table `school_user`
--

CREATE TABLE `school_user` (
  `id` int(10) UNSIGNED NOT NULL,
  `student_id` int(10) UNSIGNED NOT NULL,
  `school_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `structures`
--

CREATE TABLE `structures` (
  `id` int(10) UNSIGNED NOT NULL,
  `arname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort` int(11) NOT NULL,
  `color1` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color2` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `free` tinyint(1) NOT NULL DEFAULT '0',
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` enum('beginnerLevel','level','unit','lesson') COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int(10) UNSIGNED DEFAULT NULL,
  `code` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `structures`
--

INSERT INTO `structures` (`id`, `arname`, `enname`, `sort`, `color1`, `color2`, `free`, `image`, `type`, `parent_id`, `code`, `created_at`, `updated_at`) VALUES
(6, 'المستوي الاول', 'level two', 2, '#d785fa', '#fd42ef', 0, '1557404934.PNG', 'level', 6, '4aa15', '2019-03-06 11:42:43', '2019-05-09 10:30:41'),
(17, 'المستوي الثاني', 'level two', 2, '#79b9ff', '#3952f9', 0, '1557404972.PNG', 'level', 17, '111', '2019-03-17 09:35:02', '2019-05-09 10:29:32'),
(25, 'المستوي الثالث', 'level two', 0, '#ff6633', '#ff6633', 0, '1557404981.PNG', 'level', NULL, 'fvgvgb', '2019-04-01 07:02:58', '2019-05-09 10:29:41'),
(31, 'المستوي الرابع', 'مستوى للحذف', 3, '#ff6633', '#ff6633', 0, '1557404993.PNG', 'level', NULL, '120', '2019-04-03 07:41:36', '2019-05-09 10:30:49'),
(32, 'unit test', 'unit test', 0, '#ff6633', '#ff6633', 0, '1554284593.PNG', 'unit', NULL, '133', '2019-04-03 07:43:13', '2019-04-03 07:43:13'),
(34, 'الدرس الاول', 'lesson one12', 0, '#ff6633', '#ff6633', 1, '1554640281.PNG', 'lesson', 34, '122', '2019-04-03 07:54:55', '2019-04-03 08:33:19'),
(35, 'الدرس الثاني', 'الوحده الثانيه', 0, '#dba058', '#ff6633', 0, '1554640281.PNG', 'lesson', 35, ';lop', '2019-04-07 10:31:21', '2019-04-07 10:38:20'),
(71, 'المستوي الخامس', 'المستوي الخامس', 1, '#5bc7ac', '#0cc79e', 0, '1557405002.PNG', 'level', NULL, 'fjgnbjf', '2019-04-28 08:22:56', '2019-05-09 10:43:59'),
(73, 'الوحده الاوليhnhnhnh', 'الوحده الاولي', 0, '#5bc7ac', '#0cc79e', 0, '1556795729.PNG', 'unit', 6, 'asdfff', '2019-05-02 09:15:29', '2019-05-09 10:24:35'),
(74, 'الوحده الثانيه', 'الوحده الثانيه', 1, '#5bc7ac', '#0cc79e', 0, '1556795758.PNG', 'unit', 6, 'شسيي', '2019-05-02 09:15:58', '2019-05-02 09:15:58'),
(75, 'الوحده الثالثه', 'الوحده الثالثه', 2, '#5bc7ac', '#0cc79e', 0, '1556795779.PNG', 'unit', 6, 'شششسي', '2019-05-02 09:16:19', '2019-05-02 09:16:19'),
(76, 'الوحده الرابعه', 'الوحده الرابعه', 3, '#5bc7ac', '#0cc79e', 0, '1556795802.PNG', 'unit', 6, 'سصيسصيصي', '2019-05-02 09:16:42', '2019-05-02 09:16:42'),
(77, 'الوحده الخامسه', 'الوحده الخامسه', 4, '#5bc7ac', '#0cc79e', 0, '1556795823.PNG', 'unit', 6, 'قف لبلبل', '2019-05-02 09:17:03', '2019-05-02 09:17:03'),
(78, 'الدرس الاول', 'الدرس الاول', 0, '#5bc7ac', '#0cc79e', 0, '1556795927.PNG', 'lesson', 73, 'سسسيييب', '2019-05-02 09:18:47', '2019-05-02 09:18:47'),
(79, 'الدرس الثاني', 'الدرس الثاني', 1, '#5bc7ac', '#0cc79e', 0, '1556795951.PNG', 'lesson', 73, 'شيصي', '2019-05-02 09:19:11', '2019-05-02 09:19:11'),
(80, 'الدرس الثالث', 'الدرس الثالث', 2, '#5bc7ac', '#0cc79e', 0, '1556795970.PNG', 'lesson', 73, 'برقلبلر', '2019-05-02 09:19:30', '2019-05-02 09:19:30'),
(81, 'الدرس الرابع', 'الدرس الرابع', 3, '#5bc7ac', '#0cc79e', 0, '1556795987.PNG', 'lesson', 73, 'ثبثقبثث', '2019-05-02 09:19:47', '2019-05-02 09:19:47'),
(82, 'الدرس الخامس', 'الدرس الخامس', 4, '#5bc7ac', '#0cc79e', 0, '1556796007.PNG', 'lesson', 73, 'بقرلقلرقب', '2019-05-02 09:20:07', '2019-05-02 09:20:07'),
(85, 'الوحده الاولي', 'الوحده الاولي', 1, '#5bc7ac', '#0cc79e', 0, '1557312589.PNG', 'unit', 17, '546463', '2019-05-08 08:49:49', '2019-05-08 08:49:49'),
(86, 'الوحده الثانيه', 'الوحده الثانيه', 2, '#5bc7ac', '#0cc79e', 0, '1557312608.PNG', 'unit', 17, '541621632', '2019-05-08 08:50:08', '2019-05-08 08:50:08'),
(87, 'الوحدة الثالثه', 'الوحدة الثالثه', 3, '#5bc7ac', '#0cc79e', 0, '1557312629.PNG', 'unit', 17, '65954215', '2019-05-08 08:50:29', '2019-05-08 08:50:29'),
(88, 'الوحده الرابعه', 'الوحده الرابعه', 4, '#5bc7ac', '#0cc79e', 0, '1557312656.PNG', 'unit', 17, '8985664', '2019-05-08 08:50:56', '2019-05-08 08:50:56'),
(89, 'الوحده الخامسهةةةةةةةةةةةةةة', 'الوحده الخامسه', 5, '#5bc7ac', '#0cc79e', 0, '1557312680.PNG', 'unit', 89, '5484654+563263', '2019-05-08 08:51:20', '2019-05-08 08:51:51'),
(90, 'الدرس الاولللللللللللللللل', 'الدرس الاول', 1, '#5bc7ac', '#0cc79e', 0, '1557315928.PNG', 'lesson', 90, 'FVV54434', '2019-05-08 09:45:28', '2019-05-08 09:48:32'),
(105, 'المستوي المبتدئاىاى', 'beginner', 1, '#5bc7ac', '#0cc79e', 0, '1557401046.PNG', 'beginnerLevel', NULL, 'gbgfbgf25156', '2019-05-09 09:24:06', '2019-05-12 06:03:00'),
(106, 'الدرس الاول', 'test', 1, '#5bc7ac', '#0cc79e', 0, '1557401072.PNG', 'lesson', 105, 'jmnuyhjmnhm8548', '2019-05-09 09:24:32', '2019-05-12 06:03:17'),
(107, 'الدرس الثاني', 'test2', 1, '#5bc7ac', '#0cc79e', 0, '1557401086.PNG', 'lesson', 105, 'trgrth52582', '2019-05-09 09:24:46', '2019-05-12 06:03:44'),
(108, 'الدرس التاللت', 'test3', 1, '#5bc7ac', '#0cc79e', 0, '1557401104.PNG', 'lesson', 105, 'rfregth45242', '2019-05-09 09:25:04', '2019-05-12 06:04:13'),
(109, 'test', 'test', 4, '#5bc7ac', '#0cc79e', 0, '1557404049.PNG', 'level', NULL, 'dfgfg565863', '2019-05-09 10:14:09', '2019-05-09 10:31:00');

-- --------------------------------------------------------

--
-- Table structure for table `student_answers`
--

CREATE TABLE `student_answers` (
  `id` int(10) UNSIGNED NOT NULL,
  `quiz_lesson_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `answer` int(11) NOT NULL,
  `degree` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student_histories`
--

CREATE TABLE `student_histories` (
  `id` int(10) UNSIGNED NOT NULL,
  `level_id` int(10) UNSIGNED DEFAULT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `student_histories`
--

INSERT INTO `student_histories` (`id`, `level_id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 32, 16, '2019-04-03 22:00:00', '2019-04-03 22:00:00'),
(3, 6, 18, '2019-05-06 10:14:29', '2019-05-06 10:14:29'),
(4, 6, 19, '2019-05-07 07:09:21', '2019-05-07 07:09:21');

-- --------------------------------------------------------

--
-- Table structure for table `student_progresses`
--

CREATE TABLE `student_progresses` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `lesson_id` int(10) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` int(11) NOT NULL,
  `score` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `last_login` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `creator` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `score`, `remember_token`, `created_at`, `last_login`, `updated_at`, `creator`) VALUES
(1, 'Admin', 'admin@admin.com', '$2y$10$HGt.GR1agdzoW3qNvB6DT.lkjuWERbJzp1ngBPBrc6vfGGHPP6RHS', 0, NULL, 'Mrtol9rVlcqYrZlaMD8u6HM6P1lz1YqaTKktxUoWdNSuCuLicsPUeg3lrKwe', '2019-03-03 08:22:47', '2019-05-12 04:42:53', '2019-05-12 04:42:53', ''),
(8, 'three', 'aaaa@ggg', '$2y$10$w/OSkO20jV14KkaEvs4hgOQkVyvc8RsaLxUPd0/ga7oLlDTg2jZ4a', 1, NULL, NULL, '2019-03-03 12:22:58', NULL, '2019-03-06 06:09:06', ''),
(11, 'four', 'four@foure.com', '$2y$10$Z.0ac5DKC1nImZROS8kSvOAO.GB6IrvSW5ARMRto6viq8bzl1kaOe', 1, NULL, NULL, '2019-03-06 06:10:58', NULL, '2019-03-06 06:10:58', ''),
(12, 'five', 'five@five.com', '$2y$10$Qi3sZdpfByMS/7ItLzCDTerJRiWyiJENhDOC5KAz6RlUnP1r.XGWS', 1, NULL, NULL, '2019-03-06 06:11:25', NULL, '2019-03-06 06:11:25', ''),
(13, 'six', 'six@six.com', '$2y$10$KayAnB0tm.AYjwPJ8Lf56e/2S9EyoXaBTL..p9xBb.98oaY5b0YlK', 1, NULL, NULL, '2019-03-06 06:11:58', NULL, '2019-03-06 06:11:58', ''),
(14, 'seven', 'seven@seven.com', '$2y$10$tDoFiG6hB0h/0ujRKLjFqegLa5Tz3mZzbHTFb7dzQa8aDdVGXAaTW', 1, NULL, NULL, '2019-03-06 06:12:25', NULL, '2019-03-06 06:12:25', ''),
(15, 'data test', 'data@aa.com', '$2y$10$CeQZr.FJMaiw50chjDuiH.q4pBmyBk/OrRIRxVBp9rmWcm5s.6QLS', 1, NULL, NULL, '2019-03-13 09:09:07', NULL, '2019-03-13 09:09:07', ''),
(16, 'parent', 'parent@parent.com', '$2y$10$4kUfaypEGxtI7fM8CEw8ye6Jc.DvQ9JX/3caEQxiQegK3MT1xSnTG', 3, NULL, 'ioCsvZJyEagTto7ywMHtVJY5VwI9Dl17j0Mps0pSJb9rL9skudPHFx4C8F6p', '2019-03-19 05:09:11', '2019-05-09 05:42:08', '2019-05-09 05:42:08', ''),
(18, 'child1', 'child@child.com', '$2y$10$4kUfaypEGxtI7fM8CEw8ye6Jc.DvQ9JX/3caEQxiQegK3MT1xSnTG', 2, NULL, '5reCqG5szi727xh3PKmEV0JSPLCeBqjNDf43pTcPTZWEPuc6zzM8GAk0e8Vy', '2019-03-19 13:09:02', '2019-05-06 08:17:27', '2019-05-06 08:17:27', ''),
(19, 'child2', 'child2@child2.com', '$2y$10$N..IN94LS8PsQ1g0MH5H7.SFKQHJhdkE9GA70KfhwTpkZJUsB2m2e', 2, NULL, 'sY7Kt50tFa43MenGLLImeAq8vMj1GSP1Xmtm2yCfaHg6xHAA9tsgMX194KKr', '2019-03-19 13:11:01', '2019-05-07 06:32:49', '2019-05-07 06:32:49', ''),
(20, 'child4', 'child4@child4.com', '$2y$10$N..IN94LS8PsQ1g0MH5H7.SFKQHJhdkE9GA70KfhwTpkZJUsB2m2e', 2, NULL, NULL, '2019-03-19 13:12:51', NULL, '2019-03-19 13:12:51', ''),
(21, 'child5', 'child5@child5.com', '$2y$10$N..IN94LS8PsQ1g0MH5H7.SFKQHJhdkE9GA70KfhwTpkZJUsB2m2e', 2, NULL, NULL, '2019-03-19 13:13:55', NULL, '2019-03-19 13:13:55', ''),
(22, 'aya child', 'aya@child.com', '$2y$10$N..IN94LS8PsQ1g0MH5H7.SFKQHJhdkE9GA70KfhwTpkZJUsB2m2e', 2, NULL, 'diExxC8CNCOOWTqTENBrwmfKt0hNTgLw0bmLOGfBWUZ1IlDd2QXlO9WiUNY4', '2019-03-20 06:23:36', '2019-04-08 09:47:58', '2019-04-08 09:47:58', ''),
(23, 'test child 2', 'test2222@child.com', '$2y$10$N..IN94LS8PsQ1g0MH5H7.SFKQHJhdkE9GA70KfhwTpkZJUsB2m2e', 2, NULL, NULL, '2019-03-20 06:25:08', NULL, '2019-03-20 06:25:08', ''),
(24, 'last', 'last@test.com', '$2y$10$N..IN94LS8PsQ1g0MH5H7.SFKQHJhdkE9GA70KfhwTpkZJUsB2m2e', 2, NULL, NULL, '2019-03-20 06:26:04', NULL, '2019-03-20 06:26:04', ''),
(26, 'aya child', 'new@aya.com', '$2y$10$N..IN94LS8PsQ1g0MH5H7.SFKQHJhdkE9GA70KfhwTpkZJUsB2m2e', 2, NULL, 'TLs7x4Bi3s4gWZgxDNa7saNYCbugMLk4yyHSZQmehRPAes3yVlguzvm5CYjK', '2019-03-21 11:57:54', NULL, '2019-03-21 11:57:54', ''),
(29, 'new parent', 'parent44@test.com', '$2y$10$NjR5oDWlw2Va36.U8yzVDO5wp31OVP5eZJkSd5oYq25T3PYJIbB1G', 3, NULL, 'ylocJV3lluJP2uwFTNcj9ARE2gp5ADQn9sVg2l987BGATbj7jZgZzLF18oxz', '2019-03-27 07:15:30', NULL, '2019-03-27 07:15:30', ''),
(30, 'aya test now', 'aya@studend.com', '$2y$10$eUsFfd7dF4L4i8gHWp2WjOV3n663m3VkAfxB5Zd3K9CGKeeOBgZPe', 2, NULL, NULL, '2019-04-01 08:47:01', NULL, '2019-04-01 08:47:01', ''),
(31, 'aya888888888888888', 'aya888888888888@aya.com', '$2y$10$MK3VMCuNzQymfR4dToV9T.eAz71jV1WMJvHHHpGwR4Ue8JYBLLqw.', 0, NULL, NULL, '2019-04-01 08:50:08', NULL, '2019-04-01 08:50:08', ''),
(32, 'ءءءء', 'admin@dd.com', '$2y$10$BqeIf5hYl6ZV/pIRUEjXdO/KBzx8vA5QPtjXMipE4ymDD0IvRKsrS', 3, NULL, NULL, '2019-04-08 05:57:26', NULL, '2019-04-08 05:57:26', ''),
(33, 'new', 'new@admin.com', '$2y$10$s5Gc1FHl8MUPbuxSYu4tze9Iza8yDq/oE/QQLOrcQV3zYY.wonsSK', 2, NULL, NULL, '2019-04-09 08:09:36', NULL, '2019-04-09 08:09:36', NULL),
(34, 'w22', 'w22@admin.com', '$2y$10$x0bH28gCyjNpLnnyywUQWuFEUi7nSw1Hu5CGKRctYK9xU0n/KUD1W', 2, NULL, NULL, '2019-04-09 08:11:58', NULL, '2019-04-09 08:11:58', NULL),
(35, 'q77', 'q77@test.com', '$2y$10$C7dZbiCEoiNlwmHG6NOZ5usaoGXuY6Kk4XprSQ6nyIsZGnp/pJO2m', 2, NULL, NULL, '2019-04-09 08:15:01', NULL, '2019-04-09 08:15:01', NULL),
(36, 'ssw', 'ssw@ff.com', '$2y$10$/OSbN74rF7oN/zuHvYkNT.9JzGPmzZpz/Xy2ROWRflEjxHIfMy4eS', 2, NULL, NULL, '2019-04-09 08:17:19', NULL, '2019-04-09 08:17:19', NULL),
(37, 'yuuu', 'yy@uu.com', '$2y$10$HKVCeUyI3RbPyCv8Fs7PfeioJ/VLITWtUryze2MivFxoNk7zrwjMe', 2, NULL, NULL, '2019-04-09 08:34:41', NULL, '2019-04-09 08:34:41', NULL),
(38, 'tttttttttttt', 'tt@t.com', '$2y$10$jC4hpgW83f0eoLJ0Dc0xgO50z51C8iVoV6D/xTageAJMXhA8c/EHq', 2, NULL, NULL, '2019-04-09 08:35:56', NULL, '2019-04-09 08:35:56', 'test'),
(39, 'tttttttttttt', 'tttt@tt.com', '$2y$10$n9swIIRVrIf2dL95iYl6gOvauLycOtfduGNuOU.9/qdyTgftgW3OO', 2, NULL, NULL, '2019-04-09 08:36:50', NULL, '2019-04-09 08:36:50', 'test'),
(40, 'ee', 'ee@student.com', '$2y$10$p46HW/puxN51veJNgTy0zOP1mZ0lPngyrki1NxDbzoqJO4pa.my8.', 2, NULL, NULL, '2019-04-09 08:42:19', NULL, '2019-04-09 08:42:19', 'test'),
(41, 'rr', 'rr@rr.com', '$2y$10$IMj9D6eSBKvfHc/OQY4UUuX/S5AZruPr804kGWOLeLPRzfIg29pa2', 2, NULL, NULL, '2019-04-09 08:43:53', NULL, '2019-04-09 08:43:53', NULL),
(42, 'kik', 'ikikik@admin.com', '$2y$10$1QUt2qbeN539WhdD8L08PO1vcMaku4V3amNs1xN9FCKyl3gp.v5xG', 2, NULL, NULL, '2019-04-09 08:45:43', NULL, '2019-04-09 08:45:43', NULL),
(44, 'weee', 'wwee@ee.com', '$2y$10$008jWU9I.fXAZJcWedHmVuuC5B1hTtNrAadqIW3TH27s86IXNexJ6', 2, NULL, NULL, '2019-04-09 09:06:41', NULL, '2019-04-09 09:06:41', 'Admin');

-- --------------------------------------------------------

--
-- Table structure for table `user_parent`
--

CREATE TABLE `user_parent` (
  `id` int(10) UNSIGNED NOT NULL,
  `student_id` int(10) UNSIGNED NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_parent`
--

INSERT INTO `user_parent` (`id`, `student_id`, `parent_id`, `created_at`, `updated_at`) VALUES
(15, 26, 16, '2019-03-27 07:36:31', '2019-03-27 07:36:31'),
(22, 26, 29, '2019-03-27 09:49:25', '2019-03-27 09:49:25'),
(23, 19, 16, NULL, NULL),
(24, 21, 16, NULL, NULL),
(26, 20, 16, '2019-05-06 07:17:33', '2019-05-06 07:17:33'),
(28, 18, 16, '2019-05-06 07:21:25', '2019-05-06 07:21:25'),
(31, 30, 16, '2019-05-06 07:29:01', '2019-05-06 07:29:01'),
(33, 37, 16, '2019-05-06 07:30:29', '2019-05-06 07:30:29');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lesson_progresses`
--
ALTER TABLE `lesson_progresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lesson_progresses_user_id_foreign` (`user_id`),
  ADD KEY `lesson_progresses_lesson_id_foreign` (`lesson_id`);

--
-- Indexes for table `lesson_structures`
--
ALTER TABLE `lesson_structures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `lesson_structures_file_id_foreign` (`file_id`),
  ADD KEY `lesson_structures_lesson_id_foreign` (`lesson_id`);

--
-- Indexes for table `level_placement`
--
ALTER TABLE `level_placement`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `level_id` (`level_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `placement_tests`
--
ALTER TABLE `placement_tests`
  ADD PRIMARY KEY (`id`),
  ADD KEY `placement_tests_user_id_foreign` (`user_id`),
  ADD KEY `placement_tests_level_id_foreign` (`level_id`);

--
-- Indexes for table `quize_lessons`
--
ALTER TABLE `quize_lessons`
  ADD PRIMARY KEY (`id`),
  ADD KEY `quize_lessons_lesson_id_foreign` (`lesson_id`);

--
-- Indexes for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `quizzes_lesson_id_unique` (`lesson_id`),
  ADD KEY `quizzes_user_id_foreign` (`user_id`);

--
-- Indexes for table `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `schools_email_unique` (`email`);

--
-- Indexes for table `school_user`
--
ALTER TABLE `school_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `school_user_student_id_school_id_unique` (`student_id`,`school_id`),
  ADD KEY `school_user_school_id_foreign` (`school_id`);

--
-- Indexes for table `structures`
--
ALTER TABLE `structures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `structures_parent_id_foreign` (`parent_id`);

--
-- Indexes for table `student_answers`
--
ALTER TABLE `student_answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_answers_quiz_lesson_id_foreign` (`quiz_lesson_id`),
  ADD KEY `student_answers_user_id_foreign` (`user_id`);

--
-- Indexes for table `student_histories`
--
ALTER TABLE `student_histories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_histories_level_id_foreign` (`level_id`),
  ADD KEY `student_histories_user_id_foreign` (`user_id`);

--
-- Indexes for table `student_progresses`
--
ALTER TABLE `student_progresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_progresses_user_id_foreign` (`user_id`),
  ADD KEY `student_progresses_lesson_id_foreign` (`lesson_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_parent`
--
ALTER TABLE `user_parent`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `student_id` (`student_id`,`parent_id`),
  ADD KEY `user_parent_parent_id_foreign` (`parent_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `lesson_progresses`
--
ALTER TABLE `lesson_progresses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lesson_structures`
--
ALTER TABLE `lesson_structures`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `level_placement`
--
ALTER TABLE `level_placement`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `placement_tests`
--
ALTER TABLE `placement_tests`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `quize_lessons`
--
ALTER TABLE `quize_lessons`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `quizzes`
--
ALTER TABLE `quizzes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `schools`
--
ALTER TABLE `schools`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `school_user`
--
ALTER TABLE `school_user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `structures`
--
ALTER TABLE `structures`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=110;

--
-- AUTO_INCREMENT for table `student_answers`
--
ALTER TABLE `student_answers`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student_histories`
--
ALTER TABLE `student_histories`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student_progresses`
--
ALTER TABLE `student_progresses`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `user_parent`
--
ALTER TABLE `user_parent`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lesson_progresses`
--
ALTER TABLE `lesson_progresses`
  ADD CONSTRAINT `lesson_progresses_lesson_id_foreign` FOREIGN KEY (`lesson_id`) REFERENCES `structures` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `lesson_progresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `lesson_structures`
--
ALTER TABLE `lesson_structures`
  ADD CONSTRAINT `lesson_structures_file_id_foreign` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `lesson_structures_lesson_id_foreign` FOREIGN KEY (`lesson_id`) REFERENCES `structures` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `level_placement`
--
ALTER TABLE `level_placement`
  ADD CONSTRAINT `level_placement_level_id_foreign` FOREIGN KEY (`level_id`) REFERENCES `structures` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `placement_tests`
--
ALTER TABLE `placement_tests`
  ADD CONSTRAINT `placement_tests_level_id_foreign` FOREIGN KEY (`level_id`) REFERENCES `structures` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `placement_tests_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quize_lessons`
--
ALTER TABLE `quize_lessons`
  ADD CONSTRAINT `quize_lessons_lesson_id_foreign` FOREIGN KEY (`lesson_id`) REFERENCES `structures` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `quizzes`
--
ALTER TABLE `quizzes`
  ADD CONSTRAINT `quizzes_lesson_id_foreign` FOREIGN KEY (`lesson_id`) REFERENCES `structures` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quizzes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `school_user`
--
ALTER TABLE `school_user`
  ADD CONSTRAINT `school_user_school_id_foreign` FOREIGN KEY (`school_id`) REFERENCES `schools` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `school_user_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `structures`
--
ALTER TABLE `structures`
  ADD CONSTRAINT `structures_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `structures` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `student_answers`
--
ALTER TABLE `student_answers`
  ADD CONSTRAINT `student_answers_quiz_lesson_id_foreign` FOREIGN KEY (`quiz_lesson_id`) REFERENCES `quize_lessons` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `student_answers_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `student_histories`
--
ALTER TABLE `student_histories`
  ADD CONSTRAINT `student_histories_level_id_foreign` FOREIGN KEY (`level_id`) REFERENCES `structures` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `student_histories_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `student_progresses`
--
ALTER TABLE `student_progresses`
  ADD CONSTRAINT `student_progresses_lesson_id_foreign` FOREIGN KEY (`lesson_id`) REFERENCES `structures` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `student_progresses_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `user_parent`
--
ALTER TABLE `user_parent`
  ADD CONSTRAINT `user_parent_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_parent_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
