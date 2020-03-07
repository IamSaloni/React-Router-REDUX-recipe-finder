import React, { Component } from "react";
import { connect } from "react-redux";
import RecipeItem from './RecipeItem';

class FavoriteRecipeList extends Component {
    render() {
        return (
            <div>
                <h4>Favourite Recipes:</h4>
                {
                    this.props.favouriteRecipes.map((recipe,index)=>{
                return (
                    <RecipeItem key={index} recipe={recipe} favoriteButton={false} />
                )
            })
                }
                
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        favouriteRecipes: state.favouriteRecipes
    }
}

export default connect(mapStateToProps,null)(FavoriteRecipeList);