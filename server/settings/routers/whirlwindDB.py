class WhirlwindRouter(object):
    def db_for_read(self, model, **hints):
        "Point all operations on whirlwind models to 'whirlwind'"
        if model._meta.app_label == 'whirlwind':
            return 'whirlwind'
        return 'default'

    def db_for_write(self, model, **hints):
        "Point all operations on whirlwind models to 'whirlwind'"
        if model._meta.app_label == 'whirlwind':
            return 'whirlwind'
        return 'default'

    def allow_relation(self, obj1, obj2, **hints):
        "Allow any relation if a both models in chinook app"
        if obj1._meta.app_label == 'whirlwind' and obj2._meta.app_label == 'whirlwind':
            return True
        # Allow if neither is chinook app
        elif 'whirlwind' not in [obj1._meta.app_label, obj2._meta.app_label]:
            return True
        return False

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        if db == 'whirlwind' or app_label == "whirlwind":
            return False # we're not using syncdb on our legacy database
        else: # but all other models/databases are fine
            return True
