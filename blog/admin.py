from django.contrib import admin
from .models import Post
from mce_filebrowser.admin import MCEFilebrowserAdmin


class TinyMCEAdmin(admin.ModelAdmin):
    class Media:
        js = ('/static/js/tiny_mce/tiny_mce.js', 'static/tiny_mce/textareas.js',)


admin.site.register(Post, TinyMCEAdmin)
