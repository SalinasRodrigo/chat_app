# Generated by Django 5.0.4 on 2024-05-17 13:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat_api', '0008_message'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='destinatario',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='chat_api.myuser'),
        ),
    ]
