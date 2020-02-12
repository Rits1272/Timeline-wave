# Generated by Django 2.2.9 on 2020-02-08 18:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0006_auto_20200208_1758'),
    ]

    operations = [
        migrations.AlterField(
            model_name='connectionsawaiting',
            name='requested_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requested_by', to=settings.AUTH_USER_MODEL, to_field='username'),
        ),
        migrations.AlterField(
            model_name='connectionsawaiting',
            name='requested_to',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requested_to', to=settings.AUTH_USER_MODEL, to_field='username'),
        ),
        migrations.AlterField(
            model_name='friends',
            name='friend',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='friend', to=settings.AUTH_USER_MODEL, to_field='username'),
        ),
    ]