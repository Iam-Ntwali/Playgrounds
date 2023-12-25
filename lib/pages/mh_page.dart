import 'package:flutter/material.dart';

class MHPage extends StatefulWidget {
  const MHPage({super.key});

  @override
  State<MHPage> createState() => _MHPageState();
}

class _MHPageState extends State<MHPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Mental Health'),
      ),
    );
  }
}
