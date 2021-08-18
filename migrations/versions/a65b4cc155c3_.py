"""empty message

Revision ID: a65b4cc155c3
Revises: defdf48f2f47
Create Date: 2021-08-18 15:30:16.657839

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a65b4cc155c3'
down_revision = 'defdf48f2f47'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('plantphotos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_photos', sa.String(length=250), nullable=False),
    sa.Column('idPlant', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['idPlant'], ['plant.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('user_photos')
    )
    op.drop_constraint('plant_user_photos_key', 'plant', type_='unique')
    op.drop_column('plant', 'user_photos')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('plant', sa.Column('user_photos', sa.VARCHAR(length=120), autoincrement=False, nullable=False))
    op.create_unique_constraint('plant_user_photos_key', 'plant', ['user_photos'])
    op.drop_table('plantphotos')
    # ### end Alembic commands ###
