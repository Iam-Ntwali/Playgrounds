// main.dart

// ignore_for_file: prefer_const_constructors

import 'package:flutter/material.dart';
import 'pages/homepage.dart';
import 'pages/mh_page.dart';
import 'pages/settings.dart';
import 'pages/splash_screen.dart';
import 'pages/srh_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Your App Name',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',
      routes: {
        '/': (context) => SplashScreen(),
        '/homepage': (context) => HomePage(),
        '/service1': (context) => SRHPage(),
        // Replace 'HomePage' with your actual homepage class
        '/service2': (context) => MHPage(),
        '/settings': (context) => SettingsPage(),
        // Replace 'HomePage' with your actual homepage class
      },
    );
  }
}
