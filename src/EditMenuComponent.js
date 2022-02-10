import React from 'react';

class EditMenuComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          meal: {
              title: props.title,
              category: props.category,
              price: props.price
          }
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

//TITLE FUNC.
    handleTitleChange(event) {
      const meal = this.state.meal;
      meal.title = event.target.value;
      this.setState({
        meal: meal
      });
      this.props.setInputTitle(this.state.meal.title)
    }

//CATEGORY FUNC.
    handleCategoryChange(event) {
      const meal = this.state.meal;
      meal.category = event.target.value;
      console.log(meal.category);
      this.setState({
        meal: meal
      });
      this.props.setInputCategory(this.state.meal.category)
    }

//PRICE FUNC.
    handlePriceChange(event) {
      const meal = this.state.meal;
      meal.price = event.target.value;
      this.setState({
        meal: meal
      });
      this.props.setInputPrice(this.state.meal.price)
    }

//SUBMIT HANDLER
    handleSubmit(event) {
        event.preventDefault();
        const submittedMeal = this.state.meal;        
        this.props.setListofItems([
            ...this.props.listofItems, {title: this.props.inputTitle, category: this.props.inputCategory, price: this.props.inputPrice, isActive: true, id: Math.random() * 1000}
        ])      
        this.props.setInputTitle("");
        this.props.setInputCategory("");
        this.props.setInputPrice("");
    }

    //RENDER
    render() {
      return (
        <form onSubmit={this.handleSubmit} className='add-food'>
          {/* TITLE       */}
          <h3>Étel hozzáadása</h3>
            <p>Étel neve: </p>
            <input name="title" type="text" value={this.props.inputTitle} 
              onChange={this.handleTitleChange.bind(this)}/>
          {/* CATEGORY       */}
          <p>Étel kategóriája:</p>
          <div className='categories'>
            <select onChange={this.handleCategoryChange.bind(this)} id="cat" name="categories">
              <option value="starter" >Előétel</option>
              <option value="soup" >Leves</option>
              <option value="main" >Főétel</option>
              <option value="salad" >Savanyúságok</option>
              <option value="dessert" >Desszert</option>
            </select>
          </div>
          {/* PRICE       */}
            <p>Étel ára: </p>
            <input name="price" type="text" value={this.props.inputPrice} 
              onChange={this.handlePriceChange.bind(this)} />    
          <input type="submit" value="Mentés" />
        </form>
      );
    }
  }

export default EditMenuComponent;
