# Generated by Django 2.2.9 on 2020-02-08 17:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_remove_connectionsawaiting_button_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='friends',
            name='person',
            field=models.ForeignKey(db_column='username', on_delete=django.db.models.deletion.CASCADE, related_name='person', to=settings.AUTH_USER_MODEL),
        ),
    ]
